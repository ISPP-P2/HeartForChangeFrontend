import React from "react";
import { Route, Routes } from "react-router-dom";
import Volunteers from "./volunteers/Volunteers";
import Dashboard from "./dashboard/Dashboard";
import Beneficiaries from "./beneficiaries/Beneficiaries";
import BeneficiariesDetails from "./beneficiaries/BeneficiariesDetails";
import BodyWrapper from "../../components/BodyWrapper";
import Activities from "./activities/Activities";
import ActivityDetails from "./activities/ActivityDetails";
import AssignParticipants from "./activities/AssignParticipants";
import Subventions from "./subventions/Subventions";
import Activity from "../../static/activity";
import VolunteerDetails from "./volunteers/VolunteersDetails";
import ActivityVolunteerDetails from "./activities/ActivityDetailsVolunteers";
import FormBeneficiaries from "./beneficiaries/FormBeneficiaries";
import FormVolunteers from "./volunteers/FormVolunteers";
export default function AutorizedRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BodyWrapper title={"Panel de control"}>
            <Dashboard />
          </BodyWrapper>
        }
      />
      <Route
        path={"/voluntarios"}
        element={
          <BodyWrapper title={"Lista de voluntarios"}>
            <Volunteers />
          </BodyWrapper>
        }
      />
      <Route
        path={"/actividades"}
        element={
          <BodyWrapper title={"Lista de actividades"}>
            <Activities />
          </BodyWrapper>
        }
      ></Route>
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
      <Route
        path={"/beneficiarios"}
        element={
          <BodyWrapper title={"Lista de beneficiarios"}>
            <Beneficiaries />
          </BodyWrapper>
        }
      />
      <Route
        path={"/subvenciones"}
        element={
          <BodyWrapper title={"Lista de subvenciones"}>
            <Subventions />
          </BodyWrapper>
        }
      ></Route>
      <Route path={"/voluntario"}>  
        <Route
          path={":id"}
          element={<VolunteerDetails />}>
           </Route>
           <Route
            path={"añadir"}
            element={<FormVolunteers />}>
        </Route>
    </Route>
    <Route path={'/actividadVol'} element={<ActivityVolunteerDetails  />}/>
    <Route path={"/beneficiario"}>
      <Route
            path={":id"}
            element={<BeneficiariesDetails> </BeneficiariesDetails>}>
        </Route>
        <Route
            path={"añadir"}
            element={<FormBeneficiaries />}>
        </Route>
    </Route>
    </Routes>
    
  );
}
