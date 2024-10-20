const ConditionEnum = {
  type: "object",
  properties: {
    context: {
      type: "object",
      properties: {
        domain: {
          type: "string",
          enum: ["food", "agriculture", "fashion"],
        },
      },
      required: ["domain"],
    },
    message: {
      type: "object",
      properties: {
        catalog: {
          type: "object",
          properties: {
            provider: {
              type: "object",
              properties: {
                items: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      category_id: { type: "string" },
                    },
                    required: ["category_id"],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  required: ["context","message"],
  if: {
    properties: {
      context: {
        properties: {
          domain: { const: "food" },
        },
      },
    },
  },
  then: {
    properties: {
      message: {
        properties: {
          catalog: {
            properties: {
              provider: {
                properties: {
                  items: {
                    items: {
                      properties: {
                        category_id: {
                          enum: ["fruit", "vegetable", "meat"],
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  else: {
    if: {
      properties: {
        context: {
          properties: {
            domain: { const: "agriculture" },
          },
        },
      },
    },
    then: {
      properties: {
        message: {
          properties: {
            catalog: {
              properties: {
                provider: {
                  properties: {
                    items: {
                      items: {
                        properties: {
                          category_id: {
                            enum: ["crops", "livestock", "equipment"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    else: {
      properties: {
        message: {
          properties: {
            catalog: {
              properties: {
                provider: {
                  properties: {
                    items: {
                      items: {
                        properties: {
                          category_id: {
                            enum: ["clothing", "accessories", "footwear"],
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
module.exports=ConditionEnum