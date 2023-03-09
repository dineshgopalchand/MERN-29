import { useContext } from "react";
import { FormValContext, ThemeContext } from "./ContextSample";

const Child4 = () => {
  const ctx = useContext(FormValContext);
  const themeCtx = useContext(ThemeContext);
  return (
    <>
      <div>Child4</div>
      <div>Theme:{themeCtx}</div>
      <div>USER Name:{ctx.username}</div>
    </>
  );
};

export default Child4;
