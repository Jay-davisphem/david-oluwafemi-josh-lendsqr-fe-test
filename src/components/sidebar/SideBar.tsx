import {
  FaBriefcase as Case,
  FaHome as Home,
  FaUserFriends as Friends,
  FaUsers as Guarantors,
  FaHandshake as Hand,
  FaScroll as Scroll,
} from "react-icons/fa";
import {
  IoMdArrowDropup as SUp,
  IoMdArrowDropdown as SDown,
} from "react-icons/io";
import {
  MdOutlineSavings as Savings,
  MdManageAccounts as MAccounts,
} from "react-icons/md";
import { FiUserX as Karma, FiUserCheck as Whitelist } from "react-icons/fi";
import {
  GrMoney as FeeCharge,
  GrTransaction as Transaction,
  GrServices as Services,
} from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { GiSettingsKnobs as Preference } from "react-icons/gi";
import { CiBadgeDollar as FeePrice } from "react-icons/ci";
import { BsJournalBookmarkFill } from "react-icons/bs";
export default function SideBar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Case className="s-icons" />
          Switch Organization
          <SDown className='s-icons'/>
        </li>
      </ul>
      <ul>
        <li>
          <Home className="s-icons" />
          Dashboard
        </li>
      </ul>
      <ul>
        <p>CUSTOMERS</p>
        <li>
          <Friends className="s-icons" />
          Users
        </li>
        <li>
          <Guarantors className="s-icons" />
          Guarantors
        </li>
        <li>
          <img src="/Sack.svg" className="s-icons" />
          Loans
        </li>
        <li>
          <Hand className="s-icons" />
          Decision Model
        </li>
        <li>
          <Savings className="s-icons" />
          Savings
        </li>
        <li>
          <img src="/LoanRequest.svg" className="s-icons" />
          Loan Request
        </li>
        <li>
          <Whitelist className="s-icons" />
          Whitelist
        </li>
        <li>
          <Karma className="s-icons" />
          Karma
        </li>
      </ul>
      <ul>
        <p>BUSINESSES</p>
        <li>
          <Case className="s-icons" />
          Organization
        </li>
        <li>
          <img src="/LoanRequest.svg" className="s-icons" />
          Loan Products
        </li>
        <li>
          <Savings className="s-icons" />
          Savings Products
        </li>
        <li>
          <FeeCharge className="s-icons" />
          Fees and Charges
        </li>
        <li>
          <Transaction className="s-icons" />
          Transactions
        </li>
        <li>
          <Services className="s-icons" />
          Services
        </li>
        <li>
          <img src="/ServiceAccount.svg" className="s-icons" />
          Service Account
        </li>
        <li>
          <Scroll className="s-icons" />
          Settement
        </li>
        <li>
          <img src="/Reports.svg" className="s-icons" />
          Reports
        </li>
      </ul>
      <ul>
        <p>SETTINGS</p>
        <li>
          <Preference className="s-icons" />
          Preferences
        </li>
        <li>
          <FeePrice className="s-icons" />
          Fees and Pricing
        </li>
        <li>
          <img src="/AuditLogs.svg" className="s-icons" />
          Audit Logs
        </li>
      </ul>
    </nav>
  );
}
