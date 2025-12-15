import { Authenticator } from "@aws-amplify/ui-react";
import ToDo from "./ToDo";
function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => <ToDo user={user} signOut={signOut} />}
    </Authenticator>
  );
}

export default App;
