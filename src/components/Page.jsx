import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//
import "../styles/css/Page.css";
import clients from "../data/clients.js";
//
import Clients from "./Clients";
import Client from "./Client";
import AdviserDash from "./AdviserDash";

import Test from "./Test";

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/client" component={Client} />
          <Route path="/dashboards/adviser" component={AdviserDash} />
          {/*
          <Route path="home/recentItems" component={RecentItems} />
          <Route path="home/library" component={Library} />
          <Route path="home/uploads" component={Uploads} /> 
          */}
          <Route path="/clients" component={Clients} />
          {/* 
          // Adviser Workplace
          <Route path="/leads" component={Leads} /> 
          <Route path="/plans" component={Plans} /> 
          <Route path="/sales" component={Sales} /> 
          <Route path="/accounts" component={Accounts} /> 
          <Route path="/opportunities" component={Opportunities} /> 
          <Route path="/fundanalysis" component={FundAnalysis} /> 
          <Route path="/communication" component={Communication} /> 
          // Income
          <Route path="income/provider-statements" component={ProviderStatements} /> 
          <Route path="income//cash-receipts" component={CashReceipts} /> 
          <Route path="/income/introducers" component={IncomeIntroducers} /> 
          <Route path="income/users" component={IncomeUsers} />
          <Route path="/income/clients" component={IncomeClients} />
          <Route path="/income/advisers" component={IncomeAdvisers} />
          <Route path="/income/administration" component={IncomeAdministration} />
          // Compliance
          <Route path="compliance/file-checking" component={FileChecking} /> 
          <Route path="compliance/advisers" component={Advisers} /> 
          <Route path="compliance/complaints" component={Complaints} /> 
          <Route path="compliance/breaches" component={Breaches} /> 
          <Route path="compliance/tc-coaches" component={tcCoaches} /> 
          <Route path="compliance/author" component={Author} /> 
          <Route path="compliance/eventlist" component={Eventlist} /> 
          // Administration
          <Route path="administration/manage-users" component={ManageUsers} /> 
          <Route path="administration/organisation" component={Organisation} /> 
          <Route path="administration/group-reference-data" component={GroupReferenceData} /> 
          <Route path="administration/security" component={Security} /> 
          <Route path="administration/settings" component={Settings} /> 
          <Route path="administration/documents" component={Documents} /> 
          <Route path="administration/automation" component={Automation} /> 
          <Route path="administration/templates" component={Templates} /> 
          <Route path="administration/workflows" component={Workflows} /> 
          <Route path="administration/document-designer" component={DocumentDesigner} /> 
          // Organiser
          <Route path="organiser/tasks" component={Tasks} /> 
          <Route path="organiser/diary" component={Diary} /> 
          <Route path="organiser/my-time" component={MyTime} /> 
          // MI Reports
          <Route path="mi-reports" component={MiReports} /> 
          // iO Store
          <Route path="iostore" component={Iistore} /> 
          *}
          {/* <Clients /> */}
          {/* <Client data={clients[0]} /> */}
        </Switch>
      </div>
    );
  }
}

export default Page;
