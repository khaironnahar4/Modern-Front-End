function StarOrbit({ children, size, rotate, duration, shouldOrbit=false }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={`${shouldOrbit && "animate-spin"}`}
      style={{
        animationDuration: duration,
      }}>
        <div
          style={{
            rotate: `${rotate}deg`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div>
          <div className="inline-flex animate-spin [animation-duration:10s]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarOrbit;
