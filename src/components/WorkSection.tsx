/* eslint-disable @next/next/no-img-element */

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";

export default function LensDemo() {
  return (
    <>
      <h2 className="scout-font text-6xl font-thin text-gray-900 mb-1 ml-17 mt-40">
        My Work
      </h2>
      <div className="w-16 h-1 bg-blue-600 mb-6 ml-17"></div>
      <div className="flex justify-center ">
        <Card className="relative w-2/7 shadow-none mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative w-2/7 shadow-none ml-10 mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative w-2/7 shadow-none ml-10 mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex justify-center">
        <Card className="relative w-2/7 shadow-none mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative w-2/7 shadow-none ml-10 mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
        <Card className="relative w-2/7 shadow-none ml-10 mb-10 rounded-3xl">
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">Boat Lifestyle Rebrand</CardTitle>
            <CardDescription>
              See our latest and best camp destinations all across the five
              continents of the globe. See our latest and best camp destinations
              all across the five continents of the globe.
            </CardDescription>
          </CardContent>
          <CardFooter className="space-x-4">
            {/* <button className="inclusive-sans rounded-full px-2 py-3 bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] transition-colors mt-4 py-6 px-8 text-2xl "> */}
            <Button className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 rounded-full">
              GitHub
            </Button>
            <Button
              className="bg-[#0070f3] shadow-[0_4px_14px_0_rgb(0,118,255,39%)] text-white font-medium hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] rounded-full px-6"
              variant="secondary"
            >
              Preview
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
