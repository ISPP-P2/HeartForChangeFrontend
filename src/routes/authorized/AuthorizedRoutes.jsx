import React, { lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LegalPage from "../../components/LegalPage";
import LoadingWrapper from "../../components/LoadingWrapper";
import Attendances from "./activities/Attendances";
import WorkShops from "./workshop/WorkShops";
import WorkShopDetails from "./workshop/WorkShopDetails";
import Courses from "./courses/Courses";
import CourseDetails from "./courses/CourseDetails";
import { useAuthUser } from "react-auth-kit";
import { useEffect } from "react";
import Register from "../login/Register";

const Subventions = lazy(() => import('./subventions/Subventions'));
const SubventionsDetails = lazy(() => import("./subventions/SubventionsDetails"));
const FormBeneficiaries = lazy(() => import("./beneficiaries/FormBeneficiaries"));
const Volunteers = lazy(() => import("./volunteers/Volunteers"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Beneficiaries = lazy(() => import("./beneficiaries/Beneficiaries"));
const BeneficiariesDetails = lazy(() => import("./beneficiaries/BeneficiariesDetails"));
const Activities = lazy(() => import("./activities/Activities"));
const ActivityDetails = lazy(() => import("./activities/ActivityDetails"));
const VolunteerDetails = lazy(() => import("./volunteers/VolunteersDetails"));
const FormVolunteers = lazy(() => import("./volunteers/FormVolunteers"));



export default function AutorizedRoutes() {

  const auth = useAuthUser();
  const navigate = useNavigate();
  useEffect(() => {
    if(auth().username == import.meta.env.VITE_USERNAME_ADMIN){
        navigate("/admin/register")
    }
    },[navigate, auth]) 





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
      <Route path={"/talleres"} element={<WorkShops />}/>
      <Route path={"/taller"} >
        <Route path={":id"}element={<WorkShopDetails />} />
      </Route>
      <Route path={"/cursos"} element={<Courses />}/>
      <Route path={"/curso"} >
        <Route path={":id"}element={<CourseDetails />} />
      </Route>
      <Route path={"/beneficiario"}>
        <Route path={":id"}element={<BeneficiariesDetails />} />
        <Route path={"añadir"} element={<FormBeneficiaries />} />
      </Route>
      <Route path={"/subvenciones"} element={<Subventions />} />
      <Route path={"/subvencion"}>
        <Route path={":id"}element={<SubventionsDetails />} />
      </Route>
      <Route path={'/privacidad'} element={<LegalPage/>}></Route>
    </Routes>
    
  );
}
