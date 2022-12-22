import { Robot } from "../types/Robot.types";
import { emptySplitApi, ROBOT_DASHBOARD_TAGS } from "./api";

export const robotDashboardApi = emptySplitApi.injectEndpoints({
  endpoints(build) {
    return {
      getRobot: build.query<Robot | undefined, number>({
        query(id) {
          return {
            url: `api/robot/${id}`,
            method: "GET",
          };
        },
      }),
      getRobots: build.query<Robot[] | undefined, void>({
        query: () => ({ url: "api/robot", method: "GET" }),
        providesTags: [ROBOT_DASHBOARD_TAGS],
      }),
      createRobot: build.mutation<Robot, Pick<Robot, "name" | "numberOfArms">>({
        query(payload) {
          return {
            url: `api/robot`,
            method: "POST",
            data: payload,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
        },
        invalidatesTags: [ROBOT_DASHBOARD_TAGS],
      }),
    };
  },
  overrideExisting: false,
});

export const { useGetRobotsQuery, useGetRobotQuery, useCreateRobotMutation } =
  robotDashboardApi;
