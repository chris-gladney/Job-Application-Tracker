function InfoBlock({ text, number, color }) {
  <div className={`info-block info-block-${color}`}>
    <p>{text}</p>
    <p>{number}</p>
  </div>;
}

export default InfoBlock;
