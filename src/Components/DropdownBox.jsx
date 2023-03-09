

export default function DropdownBox({value,setValue}){
    return (
      <>
      
        <select 
          value={value}
          onChange={(e) => {
          setValue(e.target.value);}} 
          className={'w-full h-[45px] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center appearance-none font-semibold'}>
          <option value="1">Monthly</option>
          <option value="2">Quarterly</option>
          <option value={"3"}>Half-Yearly</option>
          
        </select>
        
      </>
    );
  }