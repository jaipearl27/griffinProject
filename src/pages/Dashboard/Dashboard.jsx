import React, { useEffect, useRef } from "react";
import Sidebar from "../../Components/Layout/Sidebar/Sidebar";
import Header from "../../Components/Layout/Header/Header";
import Chart from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
// import "chart.js/auto"; // Import chart.js with all components

const Dashboard = () => {
  const introductionRef = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const section8Ref = useRef();
  const section9Ref = useRef();
  const section10Ref = useRef();

  // graph refs

  const barGraphRef = useRef(null);
  const chartRef = useRef(null);

  const piechartdata = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const piechartoptions = {
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          padding: 20, // Adjust padding for even spacing
          usePointStyle: true,
        }, // Align labels centrally
      },
    },
  };

  // bar graph

  useEffect(() => {
    const ctx = barGraphRef.current.getContext("2d");

    const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "My First Dataset",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: "category",
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  //   line chart

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, "#f49080");

    var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
    gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [
          {
            label: "Data",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [100, 120, 150, 170, 180, 170, 160],
          },
        ],
      },
      options: {
        legend: {
          position: "bottom",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20,
              },
              gridLines: {
                drawTicks: false,
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
              },
            },
          ],
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-60">
        <div className="flex gap-4 w-full h-full">
          <div className=" mt-24 w-full h-full max-h-[80vh] overflow-auto">
            {/* <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div> */}
            <div className="flex gap-2 items-center justify-center mb-8 rounded-lg bg-gray-50 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center h-[20rem] rounded-lg bg-gray-50 shadow-xl border border-gray-100 w-[92%]">
                <canvas ref={chartRef} ></canvas>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center mb-8 rounded-lg bg-gray-50 shadow-xl border border-gray-100">
              <div className="flex items-center justify-center h-80 ">
                <div>
                  <canvas ref={barGraphRef} ></canvas>
                </div>
              </div>

              <div className="flex items-center justify-center h-80 ">
                <div>
                  <Pie
                    data={piechartdata}
                    options={piechartoptions}
                    // className="!w-[220px]"
                  />
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-lg bg-gray-50 shadow-xl border border-gray-100 h-28  ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div> */}

            <div className="flex flex-col p-4 justify-center h-full max-h-[100%] overflow-auto mb-4 rounded-lg bg-gray-50 shadow-xl border broder-gray-100 w-full ">
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold" ref={introductionRef}>
                  Sample IFA Report
                </div>
                <div>
                  <strong> Today's Date:</strong> 2023-10-04
                </div>
                <div>
                  <strong>Company Name:</strong> Lumina Residential Developments
                </div>
                <div className="font-bold text-lg">Summary</div>
                <div>
                  Lumina Residential Developments specializes in high-end
                  residential construction, focusing on creating sustainable and
                  tech-integrated living spaces. Founded 10 years ago, Lumina
                  has established a robust market presence in upscale
                  neighborhoods, emphasizing smart home technologies and
                  eco-friendly materials. Despite its success, Lumina navigates
                  challenges such as fluctuating raw material costs, regulatory
                  changes in sustainable building codes, and maintaining project
                  timelines within budget constraints.
                </div>
                <div className="my-4">
                  <table class="min-w-full border-collapse border border-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="border border-gray-300 px-4 py-2">ID</th>
                        <th class="border border-gray-300 px-4 py-2">
                          Data Point
                        </th>
                        <th class="border border-gray-300 px-4 py-2">Value</th>
                        <th class="border border-gray-300 px-4 py-2">
                          Optimal Range/Notes
                        </th>
                        <th class="border border-gray-300 px-4 py-2">
                          Validation Reason for Flag
                        </th>
                        <th class="border border-gray-300 px-4 py-2">
                          Recommended Action
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr ref={section1Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section2Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP02</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Gross Profit Margin
                        </td>
                        <td class="border border-gray-300 px-4 py-2">28%</td>
                        <td class="border border-gray-300 px-4 py-2">
                          15-40%, indicates efficient cost management
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section3Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP03</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Operating Profit Margin
                        </td>
                        <td class="border border-gray-300 px-4 py-2">17%</td>
                        <td class="border border-gray-300 px-4 py-2">
                          10-20%, reflects good operational efficiency
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>

                      <tr ref={section4Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP04</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Debt-to-Equity Ratio
                        </td>
                        <td class="border border-gray-300 px-4 py-2">2.1</td>
                        <td class="border border-gray-300 px-4 py-2">
                          &lt; 2.0 lower ratios are preferable for financial
                          stability
                        </td>
                        <td class="border border-gray-300 px-4 py-2">!</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section5Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP05</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Current Ratio
                        </td>
                        <td class="border border-gray-300 px-4 py-2">1.5</td>
                        <td class="border border-gray-300 px-4 py-2">
                          1.0-3.0, suggests good short-term liquidity
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section6Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP06</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Quick Ratio
                        </td>
                        <td class="border border-gray-300 px-4 py-2">1.2</td>
                        <td class="border border-gray-300 px-4 py-2">
                          &gt; 1.0, indicates healthy liquidity without relying
                          on inventory
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section7Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>

                      <tr ref={section8Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section9Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr ref={section10Ref}>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td class="border border-gray-300 px-4 py-2">DP01</td>
                        <td class="border border-gray-300 px-4 py-2">
                          Net Profit After Dividends
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          $200,000
                        </td>
                        <td class="border border-gray-300 px-4 py-2">
                          Positive value preferred, flags if negative
                        </td>
                        <td class="border border-gray-300 px-4 py-2">✓</td>
                        <td class="border border-gray-300 px-4 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-2xl font-bold">
                  Forensic Financial Summary:
                </div>
                <div>
                  <strong> Forensic Financial Summary:</strong> Overall
                  Financial Health Score: 84/100.
                </div>
                <div>
                  <strong>Competitive Analysis:</strong> Lumina's innovative
                  approach and client satisfaction place it above the average of
                  80/100 for similar companies. However, its debt ratios
                  highlight areas for financial refinement.
                </div>

                <div>
                  <strong> Forensic Financial Summary:</strong>
                </div>

                <div>Overall Financial Health Score: 84/100.</div>

                <div>
                  <strong> Areas for Improvement:</strong>
                </div>

                <div>
                  Debt management, specifically the Total Debt to Total Assets
                  ratio. Moderate risk in Claim Frequency and Severity requires
                  attention.
                </div>

                <div className="font-bold text-lg">Summary</div>
                <div>
                  Lumina Residential Developments specializes in high-end
                  residential construction, focusing on creating sustainable and
                  tech-integrated living spaces. Founded 10 years ago, Lumina
                  has established a robust market presence in upscale
                  neighborhoods, emphasizing smart home technologies and
                  eco-friendly materials. Despite its success, Lumina navigates
                  challenges such as fluctuating raw material costs, regulatory
                  changes in sustainable building codes, and maintaining project
                  timelines within budget constraints.
                </div>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 ">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div> */}
          </div>
          <div className=" mt-24  w-[300px] h-full sticky  ">
            <div className="flex items-center justify-center h-full rounded-lg bg-gray-50 shadow-xl border border-gray-100 w-full">
              <div className="h-full w-full px-3 py-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                  <li className="text-center w-full">
                    <span
                      onClick={() =>
                        introductionRef.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Introduction</span>
                    </span>
                  </li>
                  <li className="text-center w-full">
                    <span
                      onClick={() =>
                        section1Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">
                        Net Profit After Dividends
                      </span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section2Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">
                        Gross Profit Margin
                      </span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section3Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">
                        Operating Profit Margin
                      </span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section4Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">
                        Debt-to-Equity Ratio
                      </span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section5Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Current Ratio</span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section6Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Quick Ratio</span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section7Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Section 7</span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section8Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Section 8</span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section9Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Section 9</span>
                    </span>
                  </li>

                  <li className="text-center">
                    <span
                      onClick={() =>
                        section10Ref.current.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        })
                      }
                      className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 cursor-pointer"
                    >
                      <span className="w-full text-sm">Section 10</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
