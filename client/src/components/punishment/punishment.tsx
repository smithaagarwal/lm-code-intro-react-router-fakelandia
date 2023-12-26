interface PunishmentProps {
  num: number;
}
const Punishment: React.FC<PunishmentProps> = ({ num }) => {
  const width = Math.floor(num / 100);
  const height = num % 100;
  const urlForPunishment = `https://picsum.photos/${width}/${height}`;
  return (
    <>
      <img src={urlForPunishment} />
    </>
  );
};

export default Punishment;
