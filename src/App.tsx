import { ConfigProvider } from "antd";
import Routers from "./routers/Routers";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
          components: {},
        }}
      >
        <Provider store={store}>
          <Routers />
        </Provider>
      </ConfigProvider>
      <ToastContainer />
    </>
  );
}

export default App;
