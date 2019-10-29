import React,{useState} from 'react';
import useInterval from './useInterval';
import '../css/table.css';

export default function Table() {

    let rootList = [{ID:"1",suite:"940",tenant:"CBRE",category:"Real Estate"},{ID:"2",suite:"900",tenant:"EncoreFX",category:"Finance"},{ID:"3",suite:"1200",tenant:"Ernst & Young LLP Chartered Accountants",category:"Accounting"},
        {ID:"4",suite:"830",tenant:"Golden Opportunities Fund Inc.",category:"Finance"},{ID:"5",suite:"600",tenant:"Junior Achievement",category:"Education"},{ID:"6",suite:"410",tenant:"Justice Canada",category:"Government"},
        {ID:"7",suite:"950",tenant:"Marsh Canada Limited",category:"Insurance"},{ID:"8",suite:"950",tenant:"Mercer Canada Limited",category:"Consulting"},{ID:"9",suite:"1500",tenant:"MLT Aikins LLP",category:"Legal"},
        {ID:"10",suite:"1070",tenant:"RBC Dominion Securities Inc.",category:"Finance"},{ID:"11",suite:"700",tenant:"Scotia Wealth Management",category:"Finance"},{ID:"12",suite:"800",tenant:"TD Wealth",category:"Finance"},
        {ID:"13",suite:"1360",tenant:"Wellington-Altus Private Wealth Inc.",category:"Finance"},{ID:"14",suite:"830",tenant:"WESTCAP MGT.LTD.",category:"Finance"}];

    const delay = 5000;
    const pageSize = 8;
    const listSize = rootList.length;
    let [first, setFirst] = useState(0);
    let [last,setLast] = useState(pageSize);
    let [list, setList] = useState(rootList.slice(first,last));


    useInterval(() => {

        while(true){
            if (last >= listSize) {
                setLast(listSize);
                setList(rootList.slice(first,last));
                setFirst(0);
                setLast(pageSize);
            } else {
                setList(rootList.slice(first,last));
                setFirst(first + pageSize);
                setLast(last + pageSize);
            }
            return list;
        }

    }, delay);

    return (
        <div>
            <table className="o_tenant_table" cellPadding="0" cellSpacing="0">
                <tbody>
                <tr>
                    <td id="thSuite" className="o_field_heading"><b>Suite</b></td>
                    <td id="thIcon" className="o_field_heading"/>
                    <td id="thTenant" className="o_field_heading"><b>Tenant</b></td>
                    <td id="thCategory" className="o_field_heading"><b>Category</b></td>
                </tr>

                {list.map(tenants => (
                    <tr key={tenants.ID} className="altRow">
                        <td id="tdSuite" className="tenant_cell">{tenants.suite}</td>
                        <td id="tdIcon" className="tenant_cell table_icon"><img src={"/images/"+tenants.ID+".png"} alt=""/></td>
                        <td id="tdTenant" className="tenant_cell">{tenants.tenant}</td>
                        <td id="tdCategory" className="tenant_cell">{tenants.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}