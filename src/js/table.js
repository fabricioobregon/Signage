import React from 'react';
import '../css/table.css';

export default function table() {

    let root = [{suite:"940",tenant:"CBRE",category:"Real Estate"},{suite:"900",tenant:"EncoreFX",category:"Finance"},{suite:"1200",tenant:"Ernst & Young LLP Chartered Accountants",category:"Accounting"},
        {suite:"830",tenant:"Golden Opportunities Fund Inc.",category:"Finance"},{suite:"600",tenant:"Junior Achievement",category:"Education"},{suite:"410",tenant:"Justice Canada",category:"Government"},
        {suite:"950",tenant:"Marsh Canada Limited",category:"Insurance"},{suite:"950",tenant:"Mercer Canada Limited",category:"Consulting"},{suite:"1500",tenant:"MLT Aikins LLP",category:"Legal"},
        {suite:"1070",tenant:"RBC Dominion Securities Inc.",category:"Finance"},{suite:"700",tenant:"Scotia Wealth Management",category:"Finance"},{suite:"800",tenant:"TD Wealth",category:"Finance"},
        {suite:"1360",tenant:"Wellington-Altus Private Wealth Inc.",category:"Finance"},{suite:"830",tenant:"WESTCAP MGT.LTD.",category:"Finance"}];



    return (
        <div>

            <table>
                <tr>
                    <td id="thSuite" className="o_field_heading"><b>Suite</b></td>
                    <td id="thIcon" className="o_field_heading"/>
                    <td id="thTenant" className="o_field_heading"><b>Tenant</b></td>
                    <td id="thCategory" className="o_field_heading"><b>Category</b></td>
                </tr>

                {root.map(tenants => (
                    <tr className="altRow">
                        <td id="tdSuite" className="tenant_cell">{tenants.suite}</td>
                        <td id="tdIcon" className="tenant_cell"><img src="" alt=""/></td>
                        <td id="tdTenant" className="tenant_cell">{tenants.tenant}</td>
                        <td id="tdCategory" className="tenant_cell">{tenants.category}</td>
                    </tr>
                ))}

            </table>

        </div>
    )
}