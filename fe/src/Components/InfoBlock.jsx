function InfoBlock({ text, number, color }) {
  return <div className="info-block" style={{backgroundColor: color}}>
    <p className="job-type">{text}</p>
    <p className="job-number">{number}</p>
  </div>;
}

export default InfoBlock;
