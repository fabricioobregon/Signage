import React,{useState} from 'react';
import useInterval from './useInterval';
import '../css/table.css';

export default function Table() {

    let rootList = [{suite:"940",tenant:"CBRE",category:"Real Estate"},{suite:"900",tenant:"EncoreFX",category:"Finance"},{suite:"1200",tenant:"Ernst & Young LLP Chartered Accountants",category:"Accounting"},
        {suite:"830",tenant:"Golden Opportunities Fund Inc.",category:"Finance"},{suite:"600",tenant:"Junior Achievement",category:"Education"},{suite:"410",tenant:"Justice Canada",category:"Government"},
        {suite:"950",tenant:"Marsh Canada Limited",category:"Insurance"},{suite:"950",tenant:"Mercer Canada Limited",category:"Consulting"},{suite:"1500",tenant:"MLT Aikins LLP",category:"Legal"},
        {suite:"1070",tenant:"RBC Dominion Securities Inc.",category:"Finance"},{suite:"700",tenant:"Scotia Wealth Management",category:"Finance"},{suite:"800",tenant:"TD Wealth",category:"Finance"},
        {suite:"1360",tenant:"Wellington-Altus Private Wealth Inc.",category:"Finance"},{suite:"830",tenant:"WESTCAP MGT.LTD.",category:"Finance"}];

    const delay = 5000;
    const pageSize = 7;
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

            <table>
                <tbody>
                <tr>
                    <td id="thSuite" className="o_field_heading"><b>Suite</b></td>
                    <td id="thIcon" className="o_field_heading"/>
                    <td id="thTenant" className="o_field_heading"><b>Tenant</b></td>
                    <td id="thCategory" className="o_field_heading"><b>Category</b></td>
                </tr>

                {list.map(tenants => (
                    <tr key={tenants.suite} className="altRow">
                        <td id="tdSuite" className="tenant_cell">{tenants.suite}</td>
                        <td id="tdIcon" className="tenant_cell"><img src="" alt=""/></td>
                        <td id="tdTenant" className="tenant_cell">{tenants.tenant}</td>
                        <td id="tdCategory" className="tenant_cell">{tenants.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}