import Child4 from "./Child4";
import { ThemeContext } from "./ContextSample";

const Child3 = () => {
  return (
    <ThemeContext.Consumer>
      {(themeCtx) => {
        console.log(themeCtx);
        return (
          <>
            <div>Child3</div>
            <div>Theme: {themeCtx}</div>
            <Child4 />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Child3;
