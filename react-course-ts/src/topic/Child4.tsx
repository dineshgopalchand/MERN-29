import { FormValContext } from "./ContextSample";

const Child4 = () => {
  return (
    <FormValContext.Consumer>
      {(ctx) => {
        console.log(ctx);
        return (
          <>
            <div>Child4</div>
            <div>USER Name:{ctx.username}</div>
          </>
        );
      }}
    </FormValContext.Consumer>
  );
};

export default Child4;
