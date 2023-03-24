import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Volunteers from "./volunteers/Volunteers";
import Dashboard from "./dashboard/Dashboard";
import Beneficiaries from "./beneficiaries/Beneficiaries";
import BeneficiariesDetails from "./beneficiaries/BeneficiariesDetails";
import Activities from "./activities/Activities";
import ActivityDetails from "./activities/ActivityDetails";
import AssignParticipants from "./activities/AssignParticipants";
import Attendances from "./activities/Attendances";
import VolunteerDetails from "./volunteers/VolunteersDetails";
import SubventionsDetails from "./subventions/SubventionsDetails";
import ActivityVolunteerDetails from "./activities/ActivityDetailsVolunteers";
import FormBeneficiaries from "./beneficiaries/FormBeneficiaries";
import FormVolunteers from "./volunteers/FormVolunteers";
import LoadingWrapper from "../../components/LoadingWrapper";

const Subventions = lazy(() => import('./subventions/Subventions'))


export default function AutorizedRoutes() {
  return (
    <Routes element={<LoadingWrapper />}>
      <Route path="/" element={<Dashboard />}/>
      <Route path={"/voluntarios"} element={<Volunteers />}/>
      <Route path={"/voluntario"}>  
        <Route path={":id"} element={<VolunteerDetails />} /> 
        <Route path={"añadir"} element={<FormVolunteers />}/>
      </Route>
      <Route path={"/actividades"} element={<Activities />} />
      <Route path={"/actividad"}>
        <Route
          path={":id"}
          element={
              <ActivityDetails />
          }
        />
        <Route
          path={":id/asignarVoluntarios"}
          element={
            <AssignParticipants />
          }
        />
      </Route>
      <Route path={"/actividad"}>
        <Route
          path={":id"}
          element={
              <ActivityDetails />
          }
        />
        <Route
          path={":id/solicitudes"}
          element={
            <Attendances />
          }
        />
      </Route>
      <Route path={"/beneficiarios"} element={<Beneficiaries />}/>
      <Route path={"/beneficiario"}>
        <Route path={":id"}element={<BeneficiariesDetails />} />
        <Route path={"añadir"} element={<FormBeneficiaries />} />
      </Route>
      <Route path={"/subvenciones"} element={<Subventions />} />
      <Route path={"/subvencion"}>
        <Route path={":id"}element={<SubventionsDetails />} />
      </Route>
   
    </Routes>
    
  );
}
