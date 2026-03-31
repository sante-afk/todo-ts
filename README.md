# Todo-ts Desktop App

A native Windows task manager application built with React, TypeScript, and Vite, packaged using Electron. It features automatic data persistence via localStorage, ensuring tasks are saved and restored across sessions without requiring a backend server.

## Features

- **Native Execution**: Runs as a standalone `.exe` file on Windows.
- **Data Persistence**: Automatically saves tasks to local storage; no data loss on restart.
- **Type Safety**: Fully written in TypeScript for robust code maintenance.
- **Performance**: Optimized build process using Vite for fast loading times.
- **Clean Interface**: Minimalist design focused on efficient task management.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Desktop Framework**: Electron
- **Storage**: LocalStorage API

## Installation

### Pre-built Executable
1. Navigate to the **Releases** section of this repository.
2. Download the latest `Setup.exe` or portable version.
3. Run the installer to start the application.

### From Source
**Prerequisites:**
- Node.js (v18 or higher)
- npm

**Steps:**
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/todo-ts.git
   cd todo-ts
