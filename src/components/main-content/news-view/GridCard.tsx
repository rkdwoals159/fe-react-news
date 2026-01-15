import plusIcon from "@/assets/icons/plus.svg";
import newspaperIcon from "@/assets/icons/newspaper.svg";
import { useSubscription } from "@/store/SubscriptionContext";

type GridCardProps = {
  isEmpty: boolean;
  name?: string;
  logoUrl?: string;
};

export default function GridCard({
  name = "",
  logoUrl,
  isEmpty,
}: GridCardProps) {
  const { subscribe } = useSubscription();
  if (isEmpty) {
    return (
      <li className="h-[97px] border border-border-default -ml-px -mt-px" />
    );
  }

  return (
    <li className="group relative grid h-[97px] place-items-center border border-border-default -ml-px -mt-px p-3 hover:bg-surface-alt">
      <img
        className="max-h-[34px] w-full object-contain"
        src={logoUrl || newspaperIcon}
        alt={name}
        loading="lazy"
      />
      <button
        className="absolute  left-1/2 top-1/2 inline-flex available-medium12 w-[84px] h-[36px] max-w-[calc(100%-24px)] -translate-x-1/2 -translate-y-[48%] items-center justify-center gap-[10px] rounded-full border-2 border-border-bold bg-surface-default px-2 text-bold opacity-0 transition-all duration-150 group-hover:translate-y-[-50%] group-hover:opacity-100"
        type="button"
        onClick={() => subscribe(name)}
      >
        <img className="h-[12px] w-[12px]" src={plusIcon} alt="" />
        구독하기
      </button>
    </li>
  );
}
