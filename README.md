## 🧠 Real-Time WebSocket Integration

This cognitive UI system supports **live updates** from a backend orchestration engine via a WebSocket stream. These updates reflect real-time status, performance, and coordination metrics across all visualized swarm components.

### 🔌 Connection Overview

The system establishes a live connection using the following WebSocket endpoint:

```
wss://api.lovable.dev/cognitive-stream
```

### 🔄 WebSocket Lifecycle

On component mount, the system initiates and manages the socket lifecycle:

```ts
const ws = new WebSocket('wss://api.lovable.dev/cognitive-stream');
```

#### ✅ On Open:

* Sets `isConnected = true`
* Transitions `mcpStatus` to `"running"`
* Logs successful connection for Claude Code Hook simulation

#### 🔁 On Message:

* Parses incoming JSON payloads
* Delegates handling to `handleRealTimeUpdate(data)`

  * This drives live metrics, updates component state, and appends user-facing streaming logs

#### ❌ On Close:

* Sets `isConnected = false`
* Transitions `mcpStatus` to `"disconnected"`
* Optionally attempts reconnection (add logic if desired)

---

## 📡 Expected WebSocket Payloads

The backend should emit messages in this format:

```json
{
  "componentId": "CSA1",
  "type": "performance_update",         // or "status_change"
  "performance": 97,
  "message": "VISION_PROCESSOR optimization cycle complete",
  "updates": {
    "efficiency": 94,
    "throughput": 1250,
    "errorRate": 0.02
  }
}
```

Payloads may also include:

* `type: "status_change"` – updates the component's status (`active`, `idle`, `optimizing`)
* `type: "cognitive_analysis"` – feeds insights into the global `realTimeData` store
* `type: "token_update"` – tracks token usage for streaming Claude output

---

## 🛠️ Backend Source (Simulated or Real)

This WebSocket feed is powered by one of two options:

### 🔁 Simulated Mode (Dev Default)

In development, real-time updates are faked using a local interval:

```ts
const interval = setInterval(() => {
  const mockUpdate = { ... };
  handleRealTimeUpdate(mockUpdate);
}, 3000);
```

### 🚀 Live Mode (Claude + MCP Runtime)

In production, connect to the actual backend emitting live swarm state via:

* A real Claude orchestration engine using Claude Code Hooks
* A backend MCP orchestration server (e.g., LangGraph, Express + SSE, or Claude SPARC runtime)

---

## 🧪 Dev Tips

* To test WebSocket disconnection states, disconnect from internet or change the `wss://` endpoint.
* You can modify the `simulateToolCall()` function to return mock diagnostics.
* Toggle the `isAnimating` or `mcpStatus` states manually for visual debugging.

---

## 🔐 Security Note

Ensure WebSocket traffic is secured:

* Use `wss://` (secure socket layer)
* Validate payloads against a schema
* Consider auth token headers or signed connections for Claude production use

---

Let me know if you want this split into a **docs/architecture.md**, or embedded directly in the UI via a “Dev Console” panel.


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Using lovable.dev
