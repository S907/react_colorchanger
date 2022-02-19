function Button({color, setColor}) {
  console.log("Wait this is a console:", color);
  return (
    <button
      className={`${color}`}
      onClick={() => {
          console.log("Clicked!!");
          setColor(color);
        
      }}
    >
    {color}</button>
  );
}

export default Button;
