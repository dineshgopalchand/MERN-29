import { FormValContext, ThemeContext } from "./ContextSample";

const Child4 = () => {
  return (
    <FormValContext.Consumer>
      {(ctx) => {
        console.log(ctx);
        return (
          <>
            <ThemeContext.Consumer>
              {(themeCtx) => {
                return (
                  <>
                    <div>Child4</div>
                    <div>Theme:{themeCtx}</div>
                    <div>USER Name:{ctx.username}</div>
                  </>
                );
              }}
            </ThemeContext.Consumer>
          </>
        );
      }}
    </FormValContext.Consumer>
  );
};

export default Child4;
