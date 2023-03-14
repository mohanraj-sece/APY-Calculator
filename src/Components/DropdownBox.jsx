
export default function DropdownBox({value,setValue}){
    return (
      <>
      <div >
      <select 
          value={value}
          onChange={(e) => {setValue(e.target.value);}} 
          className={'w-full h-[45px] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] text-blue-700 rounded-[100px] text-center font-semibold '}>
          <option value="1" className=" text-black">Monthly</option>
          <option value="2" className=" text-black">Quarterly</option>
          <option value="3" className=" text-black">Half-Yearly</option>
          
        </select>
      </div>
        
        
      </>
    );
  }