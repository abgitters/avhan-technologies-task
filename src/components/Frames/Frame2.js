import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";

const ChatPhoneVideoArr = [
  "https://s3-alpha-sig.figma.com/img/e149/7947/45f63fc116eae4683f9671c43d7e2df9?Expires=1694995200&Signature=mv2xo1ivALDtR-~CKhpNc-CViBR1YdSwG-CE7MjiCGcCjP9rR4vH5NeTEXJegJOEF-jLoI94hPeea6TAt16rL26nmPpdJhgv4qz1etq1k5RoJS2k67wNS69Io4U59qJwRSEr3XZc-kmkF1rN5cYekHans3zEexGi4K-aT~duLR-CCVnvqleWQm5DDHoFKXz6SNG6fz3U-5AbcyYgay~xqK~BugYEz~cS2HqJFQb~ca7f5uwpQxcKLmvt1MvyYjtbr57utEoeFsHzTRcGSHdw5FcifpG5-0BXlQz~ryvyiyTd0e9~-GR2jOILE5WJRWLpctubOA8Kw-WKD~gmajfzyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/0687/c906/49a1efb51e4cf338608de929caa0b5fa?Expires=1694995200&Signature=jTmdFxh5Ig1zM1YwUYzmilEtavf9gAUcLiv~90tPQWKYpZK7~CO~Q8p-cGroFFL7QG1pUHL8Yx7rBFJthnNtr200bHSCs79lFVRPOgDGsk-EAHfLmcc33tYhHGlb5sI5Kgx06IUmyxq9UEQeW3Sm5peqfXRG653Dbc0dylQ0M69czjGPH7i4Td7~bLOFQA9KZeqqcNTQuARIyCml4BemLNC6iV55EiWEJm6dRGo18J0LioNTpLko6VEMlf0gCj0PljT3mLfrDf08luLigJhLzr-WzQ2ff575gcNB7cpLJLA3M78k7FR2gsPrOw8NXztxC2rHYh2qStqWdWdTd3rioQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/26da/4762/e01a6b4dd67bcf5b409307d31bb9ae8a?Expires=1694995200&Signature=bK5dL1iFz2bHLQA0is-B1utldQfVfWXclcwL9ZqHsOcliPa3sXelUNsACzb88-KO4eZvSS0Zy-JC6qxxvLTeSWT-RVMq1a4cgxa7soq0cB8h98~srcKwgGlG19oT2PcvgknowUqmFJFSPh5xMlykEKMNUwV-ZRUGG9cfbH0IELa87qYnmrwYSq4X-fiAW~kyb-~xIwlF1nOD0Sga~9l8lR3ZehrDm58gs~YX-9wcP0BidaZ~kZ4Ide-MNpoRwL5DZqid4tc-3CLPOb0oixT2a6i3jemgx7FhS-yp3o9~5IbdQzxwKDL53zKPYBEXdzqpdK09yxeN5-L7zmlHLcZs0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const Frame2 = () => {
  return (
    <>
      <Grid item xs={12} sm={4} md={4}>
        <Container>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={8}
          >
            {/*-------------------------------------------------Image Area */}
            <Grid item>
              <img
                style={{
                  backgroundBlendMode: "luminosity",
                  width: 200,
                  height: 200,
                }}
                src="https://s3-alpha-sig.figma.com/img/4ee3/96ba/d05638ca797d0039c7267e41dfb005cc?Expires=1694995200&Signature=WQzbQUs5ULkD8cozHzsV~wto40l9~3anTgmmUfL14rK3xMIvHA7fljh5esrwL5rn4r5HcwJ7ihmZL4Nm2TDptXbvFhXAqyt-XpSq-vpQ89dr6K16cg0V9jyoboJeO35hQqh~WHGEVvKAEEqvtGo-xhXXQlFg0fXZQES9GiudZ0wsNnuwoxnBpHuyvDCC~-po5H1-Qcu6bJCgC93-7epV~PqkHjXTlcXKLgwpqfMsFSqUh5lk5RNDL-HJsj177Lr~WlGFmw-DVxtLb0MFqSklH06G6hmQ6fDdxskOwYFdsUxVQ~i4apQ4ZF8M1qN7tQgkDbQG-klotTPyZGp7mH6cQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </Grid>
            {/*---------------------------------------------Chat Phone Video */}
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              width={220}
            >
              {Array.isArray(ChatPhoneVideoArr) &&
                ChatPhoneVideoArr.map((image, i) => {
                  return (
                    <Grid item key={i} sx={{ width: 30, height: 30 }}>
                      <img
                        style={{ width: "100%", heigth: "100%" }}
                        src={image}
                      />
                    </Grid>
                  );
                })}
            </Grid>
            {/*--------------------------------------------------Typing */}
            <Grid item>
              <TextField label="Typing..." variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Frame2;
