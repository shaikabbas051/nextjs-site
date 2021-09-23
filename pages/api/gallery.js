import Movie from "../../model/Movies";
import dbConnect from "../../lib/mongo";

export default async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const movies = await Movie.find({});
        res.status(200).json({
          data: movies
            .slice(0, 15)
            .map(({ poster_path, _id }) => ({ _id, poster_path })),
        });
        // res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
