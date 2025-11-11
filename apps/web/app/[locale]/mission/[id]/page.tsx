import React from "react";

import { missionMockup } from "@constants/mission-mockup";
import List from "@/[locale]/mission/[id]/components/list";
import Section from "@/[locale]/mission/[id]/(.)section/Section";
import PageClient from "@/[locale]/mission/[id]/page.client";

export default function page() {
  return (
    <div className="w-full flex-1 py-28 flex flex-col items-center bg-gray-200">
      <div className="flex flex-col items-center w-400 bg-white px-8 py-[3.2rem]">
        <h1 className="w-full text-gray-900 ko-text-head1 border-b border-gray-300 pb-[0.3rem]">
          {missionMockup.title}
        </h1>
        <Section title={missionMockup.description.title}>
          {missionMockup.description.items.map((item) => (
            <List key={item} item={item} />
          ))}
        </Section>
        <Section title={missionMockup.example.title}>
          {missionMockup.example.items.map((item) => (
            <div key={item.title}>
              <List key={item.title} item={item.title} />
              <ul className="list-disc list-inside pl-8">
                <List key={item.description} item={item.description} />
                <List key={item.assignment} item={item.assignment} />
                {item.example && (
                  <List key={item.example} item={item.example} />
                )}
              </ul>
            </div>
          ))}
        </Section>
        <Section title={missionMockup.submissionMethod.title}>
          {missionMockup.submissionMethod.items.map((item) => (
            <List key={item} item={item} />
          ))}
        </Section>
      </div>
      <PageClient
        submissionStartDateTime={missionMockup.submissionStartDateTime}
        endDateTime={missionMockup.endDateTime}
        status={missionMockup.status}
        submitted={missionMockup.submitted}
      />
    </div>
  );
}
