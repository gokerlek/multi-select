# MultiSelect Project

This project is a multi-select component built with React and TypeScript. It uses the Vite build tool and the Headless UI library for the UI components.

## Features

- **Selection**: You can select an active character by pressing the Enter key. The same action also allows you to deselect a previously selected character.
- **Deletion**: If the input is empty, pressing the Backspace key will delete the last element in the list.
- **Navigation**: You can navigate through the options using the Up and Down arrow keys.
- **Closing the list**: Pressing the Esc key will close the selection list.

## Dependencies

The project uses the following packages:

- `@headlessui/react` for UI components
- `react` and `react-dom` for building the user interface
- `typescript` for static types
- `vite` for building the project
- `eslint` and `@typescript-eslint/eslint-plugin` for linting
- `prettier` for code formatting
- `ramda` and `@types/ramda` for functional programming utilities
- `clsx` for conditional classnames
- `@vitejs/plugin-react` for enhancing the Vite build tool with React-specific features
- `autoprefixer`, `postcss`, and `tailwindcss` for styling

## Setup

To set up the project, clone the repository and install the dependencies using `yarn` or `npm`. Then, you can start the development server using the `dev` script defined in `package.json`.

```bash
git clone <repository-url>
cd <repository-name>
yarn install
yarn dev
```

## Usage

You can use the multi-select component in your own project by importing it from the `src` directory. The component is defined in the `MultiSelect.tsx` file and can be used as follows:

```tsx
import { MultiSelect } from './src/MultiSelect';

function App() {
  return (
    <MultiSelect
      options={[
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ]}
    />
  );
}
```

