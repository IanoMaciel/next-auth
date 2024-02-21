import { FiTrash2, FiFileText } from 'react-icons/fi'

export default function Rows() {
  return (
    <tr className="
    border-b-2
    border-b-slate-200
    h-16
    last:border-b-0
    bg-slate-100
    hover:bg-gray-200
    duration-300
    ">
      <td className="text-left pl-3">Iano de Benedito Maciel</td>
      <td className="text-center hidden sm:table-cell">21/02/2024</td>
      <td className="text-center">
        <span className="bg-green-500 px-2 py-1 rounded-lg">Open</span>
      </td>
      <td className="text-center">
        <button className='mr-4'>
          <FiFileText size={24} color="green" />
        </button>
        
        <button>
          <FiTrash2 size={24} color="red" />
        </button>
      </td>
    </tr>
  );
}