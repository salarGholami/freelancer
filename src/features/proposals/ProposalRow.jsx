import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "../../utils/toPersianNumber";
import truncateText from "../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 60)}</td>
      <td>{toPersianNumbers(proposal.duration)}روز </td>
      <td>{toPersianNumberWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
