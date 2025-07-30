"use client";

import { useState, useEffect } from "react";
import { BookOpen, Leaf, ThermometerSun, Trash2 } from "lucide-react";

const funFacts = [
  "If every person on Earth planted just one tree each year, we could plant over 8 billion trees annually. Trees absorb carbon dioxide, help cool cities, and provide homes for wildlife.",
  "The world throws away over 50 million tons of electronic waste every year. Recycling your old electronics helps recover valuable materials and prevents toxic substances from polluting the environment.",
  "Turning off the tap while brushing your teeth can save up to 8 gallons of water a day per person. Small actions at home can make a big difference in global water conservation.",
  "Coral reefs support about 25% of all marine life, but climate change and pollution threaten their survival. Protecting reefs helps preserve ocean biodiversity and coastal communities.",
  "Switching to LED light bulbs uses at least 75% less energy and lasts 25 times longer than traditional bulbs, reducing both your electricity bill and your carbon footprint.",
  "The average plastic bag is used for just 12 minutes but can take up to 1,000 years to decompose in a landfill. Choosing reusable bags helps keep our planet cleaner.",
  "Urban green spaces, like parks and rooftop gardens, can lower city temperatures by several degrees, reduce air pollution, and improve mental health for residents.",
  "If food waste were a country, it would be the third largest emitter of greenhouse gases after China and the USA. Composting and mindful shopping can help reduce this impact.",
  "Renewable energy sources like wind and solar now provide more than a quarter of the world’s electricity, helping to reduce reliance on fossil fuels and fight climate change.",
  "Biodiversity is essential for a healthy planet. Every species, no matter how small, plays a role in maintaining the balance of our ecosystems and supporting human life."
];

const learningData = [
  {
    ageGroup: "kids",
    topic: "glaciers",
    title: "Melting Glaciers",
    description:
      "Glaciers are giant ice blocks. They're melting due to global warming!",
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "glaciers",
    title: "Why is Earth Getting Hotter?",
    description: (
      <>
        <span role="img" aria-label="brain">
          🧠
        </span>{" "}
        <b>Type:</b> 2-min Animated Video
        <br />
        <b>Summary:</b> A kid-friendly video explaining greenhouse gases.
        <br />
        <a
          href="https://youtu.be/example1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Now
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "glaciers",
    title: "Fun with Ice!",
    description:
      "Simple experiments to show how ice melts faster in warm places.",
    icon: <ThermometerSun size={24} />,
  },

  // KIDS - POLLUTION
  {
    ageGroup: "kids",
    topic: "pollution",
    title: "What is Air Pollution?",
    description:
      "Learn what makes the air dirty and how we can help keep it clean.",
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "pollution",
    title: "Clean Air Superheroes",
    description:
      "Meet the people and plants that help clean our air every day.",
    icon: <Trash2 size={24} />,
  },

  // TEENS - POLLUTION
  {
    ageGroup: "teens",
    topic: "pollution",
    title: "Air Pollution",
    description:
      "Pollution from vehicles and factories harms our air and health.",
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "pollution",
    title: "How to Reduce Pollution",
    description: "Tips for teens to reduce pollution in their daily lives.",
    icon: <Trash2 size={24} />,
  },

  // TEENS - CLIMATE
  {
    ageGroup: "teens",
    topic: "climate",
    title: "Climate Change: The Science",
    description: "Explore the science behind climate change and its effects.",
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "climate",
    title: "Youth Climate Activists",
    description: "Stories of teens making a difference for the planet.",
    icon: <Leaf size={24} />,
  },

  // TEENS - RECYCLING
  {
    ageGroup: "teens",
    topic: "recycling",
    title: "Recycling 101",
    description: "Learn what can and can't be recycled in your city.",
    icon: <BookOpen size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "recycling",
    title: "DIY Recycled Crafts",
    description: "Fun projects using recycled materials.",
    icon: <BookOpen size={24} />,
  },

  // ADULTS - CLIMATE
  {
    ageGroup: "adults",
    topic: "climate",
    title: "Climate Crisis Explained",
    description:
      "Understand the science, impact, and solutions to the climate crisis.",
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "climate",
    title: "Policy and Climate Action",
    description:
      "How governments and organizations are tackling climate change.",
    icon: <Leaf size={24} />,
  },

  // ADULTS - RECYCLING
  {
    ageGroup: "adults",
    topic: "recycling",
    title: "Smart Recycling",
    description: "Recycling saves energy, reduces waste, and helps the planet.",
    icon: <BookOpen size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "recycling",
    title: "Composting at Home",
    description: "A guide to starting your own compost bin.",
    icon: <BookOpen size={24} />,
  },

  // KIDS
  {
    ageGroup: "kids",
    topic: "glaciers",
    title: "Glacier Adventure",
    description: (
      <>
        <span role="img" aria-label="mountain">
          🏔️
        </span>{" "}
        <b>Type:</b> Story
        <br />
        <b>Summary:</b> Follow a snowflake's journey through a glacier.
        <br />
        <a
          href="https://kids.nationalgeographic.com/nature/habitats/article/glaciers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Story
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "pollution",
    title: "The Litter Monster",
    description: (
      <>
        <span role="img" aria-label="monster">
          👾
        </span>{" "}
        <b>Type:</b> Comic
        <br />
        <b>Summary:</b> A fun comic about fighting pollution monsters.
        <br />
        <a
          href="https://www.epa.gov/students"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          See Comic
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "climate",
    title: "Sunny and Cloudy",
    description: (
      <>
        <span role="img" aria-label="sun">
          🌞
        </span>{" "}
        <b>Type:</b> Animated Video
        <br />
        <b>Summary:</b> Learn how weather changes with climate.
        <br />
        <a
          href="https://climatekids.nasa.gov/menu/weather-and-climate/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Video
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "kids",
    topic: "recycling",
    title: "Recycling Heroes",
    description: (
      <>
        <span role="img" aria-label="superhero">
          🦸‍♂️
        </span>{" "}
        <b>Type:</b> Game
        <br />
        <b>Summary:</b> Sort items into the right recycling bins.
        <br />
        <a
          href="https://www.recyclemore.com/kids/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Play Game
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },

  // TEENS
  {
    ageGroup: "teens",
    topic: "glaciers",
    title: "Glaciers in Danger",
    description: (
      <>
        <span role="img" aria-label="iceberg">
          🧊
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> Why are glaciers melting and what can we do?
        <br />
        <a
          href="https://www.nationalgeographic.com/environment/article/glaciers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "pollution",
    title: "Urban Air Quality",
    description: (
      <>
        <span role="img" aria-label="city">
          🏙️
        </span>{" "}
        <b>Type:</b> Infographic
        <br />
        <b>Summary:</b> See how pollution affects city life.
        <br />
        <a
          href="https://www.airnow.gov/education/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          View Infographic
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "climate",
    title: "Youth for Climate",
    description: (
      <>
        <span role="img" aria-label="megaphone">
          📢
        </span>{" "}
        <b>Type:</b> Podcast
        <br />
        <b>Summary:</b> Listen to teens making a difference.
        <br />
        <a
          href="https://www.unicef.org/climate-change/youth-action"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Listen Now
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "recycling",
    title: "Upcycling Challenge",
    description: (
      <>
        <span role="img" aria-label="lightbulb">
          💡
        </span>{" "}
        <b>Type:</b> Challenge
        <br />
        <b>Summary:</b> Turn old items into something new and useful.
        <br />
        <a
          href="https://www.earthday.org/challenges/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Join Challenge
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },

  // ADULTS
  {
    ageGroup: "adults",
    topic: "glaciers",
    title: "Glacial Retreat: Causes & Impact",
    description: (
      <>
        <span role="img" aria-label="chart">
          📈
        </span>{" "}
        <b>Type:</b> Research
        <br />
        <b>Summary:</b> Explore the science behind glacial retreat.
        <br />
        <a
          href="https://www.ipcc.ch/srocc/chapter/chapter-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Research
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "pollution",
    title: "Air Quality & Health",
    description: (
      <>
        <span role="img" aria-label="lungs">
          🫁
        </span>{" "}
        <b>Type:</b> Report
        <br />
        <b>Summary:</b> How pollution impacts adult health and solutions.
        <br />
        <a
          href="https://www.who.int/health-topics/air-pollution#tab=tab_1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Report
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "climate",
    title: "Climate Policy Explained",
    description: (
      <>
        <span role="img" aria-label="scroll">
          📜
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> Understand climate policies and their effects.
        <br />
        <a
          href="https://www.un.org/en/climatechange"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "recycling",
    title: "Home Composting Guide",
    description: (
      <>
        <span role="img" aria-label="compost">
          🌱
        </span>{" "}
        <b>Type:</b> Guide
        <br />
        <b>Summary:</b> Step-by-step to start composting at home.
        <br />
        <a
          href="https://www.epa.gov/recycle/composting-home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Guide
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },

  // RENEWABLE ENERGY
  {
    ageGroup: "kids",
    topic: "renewable",
    title: "Solar Power for Kids",
    description: (
      <>
        <span role="img" aria-label="sun">
          ☀️
        </span>{" "}
        <b>Type:</b> Animation
        <br />
        <b>Summary:</b> How the sun gives us clean energy.
        <br />
        <a
          href="https://www.youtube.com/watch?v=ZzCegQVljdY"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Animation
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "renewable",
    title: "Wind vs. Solar: The Debate",
    description: (
      <>
        <span role="img" aria-label="wind">
          💨
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> Which renewable energy is better for the future?
        <br />
        <a
          href="https://www.energy.gov/eere/renewable-energy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "renewable",
    title: "Home Renewable Energy Guide",
    description: (
      <>
        <span role="img" aria-label="house">
          🏡
        </span>{" "}
        <b>Type:</b> Guide
        <br />
        <b>Summary:</b> Steps to install solar panels at home.
        <br />
        <a
          href="https://www.energy.gov/energysaver/solar-energy-homeowners"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Guide
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },

  // BIODIVERSITY & WILDLIFE CONSERVATION
  {
    ageGroup: "kids",
    topic: "biodiversity",
    title: "Meet the Rainforest Animals",
    description: (
      <>
        <span role="img" aria-label="monkey">
          🐒
        </span>{" "}
        <b>Type:</b> Video
        <br />
        <b>Summary:</b> Discover amazing animals in the wild.
        <br />
        <a
          href="https://www.wwf.org.uk/learn/fascinating-facts/rainforest-animals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Video
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "biodiversity",
    title: "Why Biodiversity Matters",
    description: (
      <>
        <span role="img" aria-label="earth">
          🌏
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> How wildlife keeps our planet healthy.
        <br />
        <a
          href="https://www.nationalgeographic.com/environment/article/biodiversity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "biodiversity",
    title: "Conservation Success Stories",
    description: (
      <>
        <span role="img" aria-label="tiger">
          🐅
        </span>{" "}
        <b>Type:</b> Report
        <br />
        <b>Summary:</b> How global efforts are saving species.
        <br />
        <a
          href="https://www.worldwildlife.org/initiatives/wildlife-conservation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Report
        </a>
      </>
    ),
    icon: <BookOpen size={24} />,
  },

  // WATER CONSERVATION
  {
    ageGroup: "kids",
    topic: "water",
    title: "Save Water at Home",
    description: (
      <>
        <span role="img" aria-label="droplet">
          💧
        </span>{" "}
        <b>Type:</b> Activity
        <br />
        <b>Summary:</b> Fun ways to use less water every day.
        <br />
        <a
          href="https://www.epa.gov/watersense/watersense-kids"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Try Activities
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "water",
    title: "Water Warriors",
    description: (
      <>
        <span role="img" aria-label="shield">
          🛡️
        </span>{" "}
        <b>Type:</b> Challenge
        <br />
        <b>Summary:</b> Join the challenge to save water in your school.
        <br />
        <a
          href="https://www.wateraid.org/in/schools"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Join Challenge
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "water",
    title: "Rainwater Harvesting 101",
    description: (
      <>
        <span role="img" aria-label="rain">
          🌧️
        </span>{" "}
        <b>Type:</b> Guide
        <br />
        <b>Summary:</b> How to collect and use rainwater at home.
        <br />
        <a
          href="https://www.epa.gov/soakuptherain/soak-rain-rain-barrels"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Guide
        </a>
      </>
    ),
    icon: <ThermometerSun size={24} />,
  },

  // URBAN GREENING & SMART CITIES
  {
    ageGroup: "kids",
    topic: "urban",
    title: "City Gardens",
    description: (
      <>
        <span role="img" aria-label="seedling">
          🌱
        </span>{" "}
        <b>Type:</b> Story
        <br />
        <b>Summary:</b> How plants make cities better for everyone.
        <br />
        <a
          href="https://www.nationalgeographic.com/environment/article/urban-gardens"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Story
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "urban",
    title: "Smart Cities Explained",
    description: (
      <>
        <span role="img" aria-label="cityscape">
          🏙️
        </span>{" "}
        <b>Type:</b> Video
        <br />
        <b>Summary:</b> What makes a city "smart" and green?
        <br />
        <a
          href="https://www.youtube.com/watch?v=QJ6b0wGgYpA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Video
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "urban",
    title: "Urban Greening Projects",
    description: (
      <>
        <span role="img" aria-label="park">
          🏞️
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> How cities are adding more green spaces.
        <br />
        <a
          href="https://www.weforum.org/agenda/2022/04/urban-greening-cities-nature/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },

  // E-WASTE & DIGITAL POLLUTION
  {
    ageGroup: "kids",
    topic: "ewaste",
    title: "What is E-Waste?",
    description: (
      <>
        <span role="img" aria-label="computer">
          💻
        </span>{" "}
        <b>Type:</b> Animation
        <br />
        <b>Summary:</b> Learn why recycling electronics is important.
        <br />
        <a
          href="https://www.youtube.com/watch?v=6v6bqzP6H4E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Animation
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "ewaste",
    title: "Digital Pollution: The Hidden Cost",
    description: (
      <>
        <span role="img" aria-label="phone">
          📱
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> How our devices impact the environment.
        <br />
        <a
          href="https://www.earthday.org/campaign/digital-pollution/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "ewaste",
    title: "E-Waste Management Guide",
    description: (
      <>
        <span role="img" aria-label="battery">
          🔋
        </span>{" "}
        <b>Type:</b> Guide
        <br />
        <b>Summary:</b> How to safely dispose of electronics.
        <br />
        <a
          href="https://www.epa.gov/recycle/electronics-donation-and-recycling"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Guide
        </a>
      </>
    ),
    icon: <Trash2 size={24} />,
  },

  // DEFORESTATION & AFFORESTATION
  {
    ageGroup: "kids",
    topic: "deforestation",
    title: "Why Trees Matter",
    description: (
      <>
        <span role="img" aria-label="tree">
          🌳
        </span>{" "}
        <b>Type:</b> Animation
        <br />
        <b>Summary:</b> Discover why forests are important for animals and
        people.
        <br />
        <a
          href="https://www.youtube.com/watch?v=3vijLre760w"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Watch Animation
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "teens",
    topic: "deforestation",
    title: "Fighting Deforestation",
    description: (
      <>
        <span role="img" aria-label="axe">
          🪓
        </span>{" "}
        <b>Type:</b> Article
        <br />
        <b>Summary:</b> How youth can help stop deforestation.
        <br />
        <a
          href="https://www.rainforest-alliance.org/insights/what-can-you-do-to-help-the-rainforest/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Article
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "deforestation",
    title: "Afforestation Initiatives",
    description: (
      <>
        <span role="img" aria-label="seedling">
          🌱
        </span>{" "}
        <b>Type:</b> Report
        <br />
        <b>Summary:</b> Global efforts to restore forests.
        <br />
        <a
          href="https://www.fao.org/forestry/afforestation/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          Read Report
        </a>
      </>
    ),
    icon: <Leaf size={24} />,
  },

  {
    ageGroup: "teens",
    topic: "pollution",
    title: "Air Pollution",
    description:
      "Pollution from vehicles and factories harms our air and health.",
    icon: <Trash2 size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "climate",
    title: "Climate Crisis Explained",
    description:
      "Understand the science, impact, and solutions to the climate crisis.",
    icon: <Leaf size={24} />,
  },
  {
    ageGroup: "adults",
    topic: "recycling",
    title: "Smart Recycling",
    description: "Recycling saves energy, reduces waste, and helps the planet.",
    icon: <BookOpen size={24} />,
  },
];

export default function LearnPage() {
  const [ageGroup, setAgeGroup] = useState("kids");
  const [topic, setTopic] = useState("glaciers");
  const [userCards, setUserCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCard, setNewCard] = useState({
    ageGroup: ageGroup,
    topic: topic,
    title: "",
    description: "",
  });

  // Merge built-in and user cards for filtering
  const filteredContent = [...learningData, ...userCards].filter(
    (item) => item.ageGroup === ageGroup && item.topic === topic
  );

  // Icon selection helper
  const getIcon = (topic) => {
    switch (topic) {
      case "glaciers":
      case "water":
        return <ThermometerSun size={24} />;
      case "pollution":
      case "ewaste":
        return <Trash2 size={24} />;
      case "recycling":
      case "biodiversity":
      case "deforestation":
        return <BookOpen size={24} />;
      default:
        return <Leaf size={24} />;
    }
  };

  // Handle form submit
  const handleAddCard = (e) => {
    e.preventDefault();
    setUserCards([
      ...userCards,
      {
        ...newCard,
        icon: getIcon(newCard.topic),
      },
    ]);
    setShowForm(false);
    setNewCard({
      ageGroup,
      topic,
      title: "",
      description: "",
    });
  };

  // Fun Fact state and effect
  const [factIdx, setFactIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIdx((prev) => (prev + 1) % funFacts.length);
    }, 5000); // Change fact every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F8E9] text-[#1B5E20] dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex ">
        {/* Sidebar */}
        <aside className="w-64 h-60 bg-[#C8E6C9] dark:bg-gray-800 p-6 mt-9 ml-6 rounded-xl space-y-6 border-r border-[#B2DFDB] dark:border-gray-700 hidden md:block">
          <div>
            <h2 className="text-lg font-bold mb-2">Select Age Group</h2>
            <select
              value={ageGroup}
              onChange={(e) => {
                setAgeGroup(e.target.value);
                setNewCard((prev) => ({ ...prev, ageGroup: e.target.value }));
              }}
              className="w-full p-2 rounded border border-[#B0BEC5] bg-white text-[#1B5E20]"
            >
              <option value="kids">Kids</option>
              <option value="teens">Teens</option>
              <option value="adults">Adults</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Choose a Topic</h2>
            <select
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                setNewCard((prev) => ({ ...prev, topic: e.target.value }));
              }}
              className="w-full p-2 rounded border border-[#B0BEC5] bg-white text-[#1B5E20]"
            >
              <option value="glaciers">Glaciers</option>
              <option value="pollution">Pollution</option>
              <option value="climate">Climate Change</option>
              <option value="recycling">Recycling</option>
              <option value="renewable">Renewable Energy</option>
              <option value="biodiversity">
                Biodiversity & Wildlife Conservation
              </option>
              <option value="water">Water Conservation</option>
              <option value="urban">Urban Greening & Smart Cities</option>
              <option value="ewaste">E-Waste & Digital Pollution</option>
              <option value="deforestation">
                Deforestation & Afforestation
              </option>
            </select>
          </div>
        </aside>

        {/* Content Section */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">
            Learn About {topic.charAt(0).toUpperCase() + topic.slice(1)}
          </h1>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredContent.length > 0 ? (
              filteredContent.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 border border-[#C8E6C9] dark:border-gray-700 rounded-lg shadow hover:shadow-md transition p-4"
                >
                  <div className="flex items-center gap-2 text-[#2E7D32] dark:text-green-300 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-[#37474F] dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <p>No content available for this selection.</p>
            )}
          </div>
          <button
            className="fixed bottom-8 right-8 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-700 transition z-50"
            aria-label="Add"
            onClick={() => setShowForm(true)}
          >
            +
          </button>
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <form
                className="bg-white p-6 rounded shadow space-y-4 min-w-[300px]"
                onSubmit={handleAddCard}
              >
                <h2 className="font-bold text-lg mb-2">Add New Card</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={newCard.title}
                  onChange={(e) =>
                    setNewCard({ ...newCard, title: e.target.value })
                  }
                  required
                  className="border p-2 w-full"
                />
                <textarea
                  placeholder="Description"
                  value={newCard.description}
                  onChange={(e) =>
                    setNewCard({ ...newCard, description: e.target.value })
                  }
                  required
                  className="border p-2 w-full"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
      {/* Fun Fact Section */}
      <div className="fixed bottom-8 left-6 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-xl shadow-lg p-4 w-64 h-80 overflow-y-auto z-50">
        <div className="flex items-center gap-2 mb-2">
          <span
            role="img"
            aria-label="lightbulb"
            className="text-yellow-500 text-xl"
          >
            💡
          </span>
          <span className="font-bold text-green-800 dark:text-green-300">
            Fun Fact
          </span>
        </div>
        <p className="text-[#37474F] dark:text-gray-300">{funFacts[factIdx]}</p>
      </div>
    </div>
  );
}
