import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink } from "react-router-dom";

export default function TimelineHome() {
  return (
    <div className="flex flex-col items-center justify-around gap-2 w-full m-auto">
      <div className="flex items-center justify-between w-full px-1">
        <h2 className="text-2xl font-bold">Próximas paradas</h2>
        <Button variant="text" component={NavLink} to={"/rota"}>
          Ver Rota <KeyboardArrowRightIcon />
        </Button>
      </div>
      <Card sx={{ width: "100%", borderRadius: 5, backgroundColor: "#f8fafc" }}>
        <CardContent>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                display: "none",
                padding: 1,
              },
            }}
          >
            <TimelineItem
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <LocationOn sx={{ color: "#0d3c76ff" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 600 }}
                >
                  Camapuã
                </Typography>
                <Typography>145 km</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <LocationOn sx={{ color: "green" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 600 }}
                >
                  Chapadão do Sul
                </Typography>
                <Typography>330 km</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <LocationOn sx={{ color: "red" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 600 }}
                >
                  Jataí
                </Typography>
                <Typography>510 km</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <LocationOn sx={{ color: "yellow" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 600 }}
                >
                  Rio Verde
                </Typography>
                <Typography>645 km</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  <LocationOn sx={{ color: "purple" }} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "12px",
                  px: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: 600 }}
                >
                  Goiânia
                </Typography>
                <Typography>840 km</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}
