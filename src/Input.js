const Input =(props) => {
    const {name,...rest}=props;
    return (
      <input{...rest}></input>
        
    )
}
export default Input