import type { NextPage } from "next";
import SnbProfile from "@/components/organisms/snbProfile/SnbProfile";
import Gnb from "@/components/organisms/gnb/Gnb";

const App: NextPage = () => {
  return (
    <>
      <Gnb />
      <SnbProfile />
    </>
  );
};

export default App;
