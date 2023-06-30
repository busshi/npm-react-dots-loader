# React-Dots-Loader

A custom React dots loader component reusable without extra dependency (only React dependencies).

## Installation

`yarn add @busshi/react-dots-loader` or `npm install @busshi/react-dots-loader`

## Custom properties

| Props  | Type   | Default value | Optional |
| :----- | :----- | :------------ | :------- |
| width  | string | 20px          | x        |
| height | string | 20px          | x        |
| color  | string | #ddd          | x        |

## Note

Colors can be passed as prop as hex (#FFF), rgb (rgb(255, 255, 255)) or as noun (white).

## Usage

```js
import DotsLoader from "@busshi/react-dots-loader";

function App() {
  return <DotsLoader width="20px" height="20px" color="#ddd" />;
}

export default App;
```
