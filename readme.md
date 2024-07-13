````markdown
# Vitest JavaScript Example

This is an example project demonstrating how to use Vite with Vitest for unit testing in JavaScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MYusron12/vitest-javascript.git
   cd vitest-javascript
   ```
````

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Development Server

To start the Vite development server, run:

```bash
npm run dev
```

### Running Tests

To run the unit tests using Vitest, run:

```bash
npm run test
```

## Project Structure

```
.
├── public
│   └── ...
├── src
│   ├── assets
│   │   └── ...
│   ├── components
│   │   └── ...
│   ├── math.js         # Example source file
│   ├── math.test.js    # Example test file
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### `src/math.js`

This file contains example functions to be tested.

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

### `src/math.test.js`

This file contains example unit tests for the functions in `math.js`.

```javascript
import { describe, it, expect } from "vitest";
import { add, subtract } from "./math";

describe("Math functions", () => {
  it("adds two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("subtracts two numbers correctly", () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
```

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run test`: Runs the unit tests using Vitest.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```

```
