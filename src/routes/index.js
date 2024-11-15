import { CircularProgress, Stack } from "@mui/material";
import * as React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CommonRoute from "./CommonRoute";
import PrivateRoute from "./PrivateRoute";
import routes from "./RoutesConstants";

function Router() {
  return (
    <Suspense
      fallback={
        <Stack
          direction={"row"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Stack>
      }
    >
      <Routes>
        {routes.map(
          (
            { element: Component, path, isAuthenticated, isCommon, ...rest },
            i
          ) => {
            return (
              <Route
                {...rest}
                path={path}
                element={
                  isCommon ? (
                    <Component />
                  ) : isAuthenticated ? (
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <CommonRoute>
                      {" "}
                      <Component />
                    </CommonRoute>
                  )
                }
              />
            );
          }
        )}
      </Routes>
    </Suspense>
  );
}

export default Router;
