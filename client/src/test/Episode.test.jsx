// import { render, act } from "@testing-library/react";
// import axiosMock from "axios";
// import Episode from "../pages/Episode";

// describe("Episode", () => {
//   afterEach(() => {
//     axiosMock.get.mockClear();
//   });

//   it("should fetch episodes and set them in state", async () => {
//     const episodes = [{ title: "episode 1" }, { title: "episode 2" }];
//     axiosMock.get.mockResolvedValueOnce({ data: { episodes } });

//     const { result, waitForNextUpdate } = render(() => Episode());

//     act(() => {
//       result.current.getCast();
//     });

//     await waitForNextUpdate();

//     expect(result.current.episodes).toEqual(episodes);
//     expect(axiosMock.get).toHaveBeenCalledWith(
//       "https://futurama.onrender.com/api/v1//getEpisode"
//     );
//   });
// });
