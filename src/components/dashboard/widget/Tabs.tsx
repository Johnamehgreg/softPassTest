import ChartImage from "../../../assets/image/image/card 1.png";

interface Props {
  details: any;
}

function Tabs(props: Props) {
  const { details } = props;

  return (
    <div
      className="full bg-white px-4 py-4 rounded-[10px] garrif relative bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${ChartImage})` }}
    >
      <span className="block w-full sm:text-[13px] text-[10px] pb-1">
        {details?.name}
      </span>
      <span className="sm:text-[13px] text-[10px]">
        <abbr className="text-[23px] mr-1">{details?.amount}</abbr>
        <abbr className="text-gray-400 md:text-[13px] text-[11px]">
          {details?.title}
        </abbr>
      </span>
    </div>
  );
}

export default Tabs;
