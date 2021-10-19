import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//
import "../styles/css/Page.css";
// import clients from "../data/clients.js";
//
import Client from "./Client";
import Adviser_Dash from "./areas/home/dashboards/Adviser_Dash";
import Organiser_Dash from "./areas/home/dashboards/Organiser_Dash";
import Admin_Dash from "./areas/home/dashboards/Admin_Dash";
import WorkedOnItems_Recent from "./areas/home/recent-items/WorkedOnItems_Recent";
import DocumentQueue_Recentx from "./areas/home/recent-items/DocumentQueue_Recent";
import My_Documents from "./areas/library/MyDocuments";
import Documents_Library from "./areas/library/Documents_Library";
import Uploads from "./areas/home/Uploads";
// Adviser Workplace
import Clients from "./areas/adviserWorkplace/Clients";
// import Leads from "./Clients";
import Plans from "./areas/adviserWorkplace/Plans";
import Sales from "./areas/adviserWorkplace/Sales";
import Accounts from "./areas/adviserWorkplace/Accounts";
import Opportunities from "./areas/adviserWorkplace/Opportunities";
import FundAnalysis from "./areas/adviserWorkplace/FundAnalysis";
import Communication from "./areas/adviserWorkplace/Communication";
// Income
import ProviderStatements from "./areas/income/ProviderStatements";
import CashReceipts from "./areas/income/CashReceipts";
import IncomeIntroducers from "./areas/income/IncomeIntroducers";
import IncomeUsers from "./areas/income/IncomeUsers";
import IncomeClients from "./areas/income/IncomeClients";
import IncomeAdvisers from "./areas/income/IncomeAdvisers";
import IncomeAdministration from "./areas/income/IncomeAdministration";

import Test from "./Test";

class Page extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route path="/" exact component={Clients} />
          <Route path="/test" component={Test} />
          <Route path="/client" component={Client} />
          {/* Home */}
          <Route path="/dashboards/adviser" component={Adviser_Dash} />
          <Route path="/dashboards/organiser" component={Organiser_Dash} />
          <Route path="/dashboards/admin" component={Admin_Dash} />
          {/*  */}
          <Route path="/recent-items/worked-on-items" component={WorkedOnItems_Recent} />
          <Route path="/recent-items/document-queue" component={DocumentQueue_Recentx} />
          {/*  */}
          <Route path="/library/my-documents" component={My_Documents} />
          <Route path="/library/documents" component={Documents_Library} />
          <Route path="/uploads" component={Uploads} />
          {/* Adviser Workplace */}
          <Route path="/adviser-workplace/clients" component={Clients} />
          {/* <Route path="/adviser-workplace/leads" component={Leads} /> */}
          <Route path="/adviser-workplace/plans" component={Plans} />
          <Route path="/adviser-workplace/sales" component={Sales} />
          <Route path="/adviser-workplace/accounts" component={Accounts} />
          <Route path="/adviser-workplace/opportunities" component={Opportunities} />
          <Route path="/adviser-workplace/fund-analysis" component={FundAnalysis} />
          <Route path="/adviser-workplace/communication" component={Communication} />
          {/* Income */}
          <Route path="/income/provider-statements" component={ProviderStatements} />
          <Route path="/income/cash-receipts" component={CashReceipts} />
          <Route path="/income/introducers" component={IncomeIntroducers} />
          <Route path="/income/users" component={IncomeUsers} />
          <Route path="/income/clients" component={IncomeClients} />
          <Route path="/income/advisers" component={IncomeAdvisers} />
          <Route path="/income/administration" component={IncomeAdministration} />
          {/*
          // Compliance
          <Route path="/compliance/file-checking" component={FileChecking} />
          <Route path="/compliance/advisers" component={Advisers} />
          <Route path="/compliance/complaints" component={Complaints} />
          <Route path="/compliance/breaches" component={Breaches} />
          <Route path="/compliance/tc-coaches" component={tcCoaches} />
          <Route path="/compliance/author" component={Author} />
          <Route path="/compliance/eventlist" component={Eventlist} />
          // Administration
          <Route path="/administration/manage-users" component={ManageUsers} />
          <Route path="/administration/organisation" component={Organisation} />
          <Route path="/administration/group-reference-data" component={GroupReferenceData} />
          <Route path="/administration/security" component={Security} />
          <Route path="/administration/settings" component={Settings} />
          <Route path="/administration/documents" component={Documents} />
          <Route path="/administration/automation" component={Automation} />
          <Route path="/administration/templates" component={Templates} />
          <Route path="/administration/workflows" component={Workflows} />
          <Route path="/administration/document-designer" component={DocumentDesigner} />
          // Organiser
          <Route path="/organiser/tasks" component={Tasks} />
          <Route path="/organiser/diary" component={Diary} />
          <Route path="/organiser/my-time" component={MyTime} />
          // MI Reports
          <Route path="/mi-reports" component={MiReports} />
          // iO Store
          <Route path="/iostore" component={Iistore} />
          *}
          {/* <Clients /> */}
          {/* <Client data={clients[0]} /> */}
        </Switch>
      </div>
    );
  }
}

export default Page;
