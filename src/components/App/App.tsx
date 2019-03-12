import React from "react"

export interface AppProps {
  name: string;
}

const App = (props: AppProps): JSX.Element => {
  const { name } = props
  return <div className="bg-green pa3 tc f1 georgia">{`Hello, ${name}!`}</div>
}

export default App
