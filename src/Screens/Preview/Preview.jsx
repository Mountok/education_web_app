import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Stack, Typography, styled } from "@mui/material";
import  {ExpandMore, School, CheckBoxOutlined, CheckBoxOutlineBlank} from '@mui/icons-material';
const StyledBox = styled(Box)({
  borderRadius: "10px",
  boxShadow: "0 2px 5px #cbcbcb",
});

const Preview = () => {
  return (
    <Stack flex={7} gap={2} mt={3}>
      <StyledBox p={2}>
        <Typography color="primary" variant="h3">
          Верстка сайтов
        </Typography>
        <Stack mt={1} direction="row" gap={0.5}>
          <Chip size="small" variant="outlined" label="html" />
          <Chip size="small" variant="outlined" label="css" />
          <Chip size="small" variant="outlined" label="javascript" />
        </Stack>
      </StyledBox>
      <StyledBox p={2}>
        <Typography color="primary" variant="h5">
          О курсе
        </Typography>
        <Stack mt={1} direction="row" gap={1}>
          <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            cum ducimus mollitia explicabo deleniti voluptates eum culpa ut
            porro ab ex iste pariatur voluptatem commodi numquam? Repellendus
            aut obcaecati totam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia placeat officiis voluptates soluta unde
            assumenda commodi optio delectus! Enim sint accusantium alias
            quisquam voluptate, explicabo cupiditate similique veniam incidunt
            mollitia?
          </Typography>
        </Stack>
      </StyledBox>
      <StyledBox p={2}>
        <Typography color="primary" variant="h5">
          Содержание курса
        </Typography>
        <Stack mt={1} direction="column" gap={1}>
          <Accordion sx={{boxShadow: 'none'}} disableGutters>
            <AccordionSummary   
                
              expandIcon={<ExpandMore color="primary"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >

              <Typography>Введение</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <Button sx={{mt:1}} size="small" color="primary" variant="outlined" endIcon={<School/>}>
                начать
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{boxShadow:'none'}} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMore color="primary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >

              <Typography>HTML</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <Button sx={{mt:1}} size="small" color="primary" variant="outlined" endIcon={<School/>}>
                начать
              </Button>
            </AccordionDetails>
          </Accordion>
          
          <Accordion sx={{boxShadow:'none'}} disableGutters >
            <AccordionSummary
              expandIcon={<ExpandMore color="primary" />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >

              <Typography>Тег Div</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <Button sx={{mt:1}} size="small" color="primary" variant="outlined" endIcon={<School/>}>
                начать
              </Button>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </StyledBox>
    </Stack>
  );
};

export default Preview;
