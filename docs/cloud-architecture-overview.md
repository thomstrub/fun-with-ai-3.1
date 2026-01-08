# Cloud Architecture Overview

This document provides a simple system context view of the TODO App monorepo, showing the React frontend, Express API, and in-memory data store.

```mermaid
%%{init: {'theme': 'neutral'}}%%
C4Context
  title TODO App — System Context

  Person(user, "User", "Manages tasks via a web browser")

  System_Boundary(sys, "TODO App (Monorepo)") {
    Container(web, "React Frontend", "React, Browser", "UI for browsing and managing tasks")
    Container(api, "Express API", "Node.js / Express", "REST endpoints and business logic for tasks")
    ContainerDb(store, "In-memory Store", "Process memory", "Volatile storage for tasks during runtime")
  }

  Rel(user, web, "Uses", "HTTPS")
  Rel(web, api, "Calls REST/JSON", "HTTP")
  Rel(api, store, "Reads/Writes tasks")
```

## Sequence: Create TODO

This sequence shows a user creating a new TODO item via the React frontend and Express API.

```mermaid
%%{init: {'theme': 'neutral'}}%%
sequenceDiagram
  actor User
  participant Web as React Frontend
  participant API as Express API
  participant Store as In-memory Store

  User->>Web: Open app
  User->>Web: Submit "Create TODO" form
  Web->>API: POST /tasks {title, description, dueDate}
  API->>Store: Persist new task
  Store-->>API: Return new task id
  API-->>Web: 201 Created with task JSON
  Web-->>User: Display created task in list
```
 
