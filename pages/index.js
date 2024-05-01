import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoLinkedin, IoLogoGithub, IoPhonePortraitOutline } from "react-icons/io5";
import thumbYouTube from "../public/images/youtube.png";
import Image from "next/image";

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a software developer based in Moscow
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikita Parshin
          </Heading>
          <p>
            Digital Craftzman, senior backend developer, IT genius, developed
            google in 1995 but it was stolen by imposters
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image src="/ava.jpg" alt="Profile image" width="100" height="100" />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nikita is a software developer based in Moscow with a passion for
          building digital services/stuff he wants. He has a knack for all
          things launching products, from planning and designing all the way to
          solving real-life problems with code. When not online, he loves
          hanging out with his girlfriend.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Russia.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Lanit BPM
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working at Tinkoff Bank
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Drawing, Playing Guitar, Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lParzivall" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @lParzivall
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/lparzivall/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @lparzivall
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://t.me/lparsivall"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoPhonePortraitOutline />}
              >
                @lparzivall
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <p>Just say Hello</p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:nikita.parshin.01@mail.ru"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Email me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
