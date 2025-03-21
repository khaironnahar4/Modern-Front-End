function Sparkle({size}) {
  return (
    <svg
      width={`${size*4}`}
      height={`${size*4}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className={`size-${size}`}
      // style={{
      //   width: `${size} px`,
      //   height: `${size} px`,
      // }}
    >
      <path
        d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z"
        fill="#5ee9b626"
      />
    </svg>
  );
}

export default Sparkle;
