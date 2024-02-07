const Log = ({ turnLogs }) => {
  return (
    <ol id="log">
      {turnLogs.map((turnLog, index) => (
        <li key={index}> {turnLog} </li>
      ))}
    </ol>
  );
};
export default Log;
