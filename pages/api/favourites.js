import Movie from "../../model/Movies";
import dbConnect from "../../lib/mongo";
export default async (req, res) => {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const movies = await Movie.find({});
        res.status(200).json({
          data: movies,
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
