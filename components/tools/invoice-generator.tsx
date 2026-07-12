"use client";

import * as React from "react";
import { Plus, Trash2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type LineItem = { id: string; description: string; qty: number; unit: number };

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

export function InvoiceGenerator() {
  const [from, setFrom] = React.useState({
    name: "Your Company",
    email: "you@company.com",
    address: "1 Market St, San Francisco, CA",
  });
  const [to, setTo] = React.useState({
    name: "Client Name",
    email: "client@example.com",
    address: "",
  });
  const [meta, setMeta] = React.useState({
    number: "INV-2026-0001",
    issue: new Date().toISOString().slice(0, 10),
    due: new Date(Date.now() + 14 * 86_400_000).toISOString().slice(0, 10),
    tax: 0,
    currency: "USD",
  });
  const [items, setItems] = React.useState<LineItem[]>([
    { id: makeId(), description: "Design & development", qty: 1, unit: 1000 },
  ]);
  const { push } = useToast();

  const subtotal = items.reduce((s, i) => s + i.qty * i.unit, 0);
  const taxAmount = subtotal * (meta.tax / 100);
  const total = subtotal + taxAmount;

  function addItem() {
    setItems((prev) => [
      ...prev,
      { id: makeId(), description: "", qty: 1, unit: 0 },
    ]);
  }
  function updateItem(id: string, patch: Partial<LineItem>) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, ...patch } : i)));
  }
  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function print() {
    push({
      title: "Ready to print",
      description: "Opening your browser's print dialog — save as PDF.",
      variant: "success",
    });
    window.print();
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12">
      <aside className="space-y-4 lg:col-span-4 print:hidden">
        <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
          <h3 className="font-display text-sm font-semibold">From</h3>
          <div className="mt-3 space-y-3">
            <Input
              value={from.name}
              onChange={(e) => setFrom({ ...from, name: e.target.value })}
              placeholder="Business name"
            />
            <Input
              value={from.email}
              onChange={(e) => setFrom({ ...from, email: e.target.value })}
              placeholder="Email"
            />
            <Input
              value={from.address}
              onChange={(e) => setFrom({ ...from, address: e.target.value })}
              placeholder="Address"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
          <h3 className="font-display text-sm font-semibold">Bill to</h3>
          <div className="mt-3 space-y-3">
            <Input
              value={to.name}
              onChange={(e) => setTo({ ...to, name: e.target.value })}
              placeholder="Client name"
            />
            <Input
              value={to.email}
              onChange={(e) => setTo({ ...to, email: e.target.value })}
              placeholder="Email"
            />
            <Input
              value={to.address}
              onChange={(e) => setTo({ ...to, address: e.target.value })}
              placeholder="Address (optional)"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
          <h3 className="font-display text-sm font-semibold">Invoice details</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <Label className="text-[10px] uppercase text-muted-foreground">
                Number
              </Label>
              <Input
                value={meta.number}
                onChange={(e) => setMeta({ ...meta, number: e.target.value })}
              />
            </div>
            <div>
              <Label className="text-[10px] uppercase text-muted-foreground">
                Currency
              </Label>
              <Input
                value={meta.currency}
                onChange={(e) => setMeta({ ...meta, currency: e.target.value })}
              />
            </div>
            <div>
              <Label className="text-[10px] uppercase text-muted-foreground">
                Issued
              </Label>
              <Input
                type="date"
                value={meta.issue}
                onChange={(e) => setMeta({ ...meta, issue: e.target.value })}
              />
            </div>
            <div>
              <Label className="text-[10px] uppercase text-muted-foreground">
                Due
              </Label>
              <Input
                type="date"
                value={meta.due}
                onChange={(e) => setMeta({ ...meta, due: e.target.value })}
              />
            </div>
            <div className="col-span-2">
              <Label className="text-[10px] uppercase text-muted-foreground">
                Tax %
              </Label>
              <Input
                type="number"
                min="0"
                max="100"
                value={meta.tax}
                onChange={(e) =>
                  setMeta({ ...meta, tax: parseFloat(e.target.value) || 0 })
                }
              />
            </div>
          </div>
        </div>
        <Button variant="gradient" size="lg" className="w-full" onClick={print}>
          <Printer className="h-4 w-4" /> Print / Save PDF
        </Button>
      </aside>

      <section className="lg:col-span-8">
        <div className="rounded-3xl border border-border/70 bg-white p-8 text-slate-900 shadow-xl print:border-0 print:shadow-none">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-display text-2xl font-bold">Invoice</div>
              <div className="mt-1 text-xs font-mono text-slate-500">
                {meta.number}
              </div>
            </div>
            <div className="text-right text-xs text-slate-500">
              <div>Issued: {meta.issue}</div>
              <div>Due: {meta.due}</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-xs">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                From
              </div>
              <div className="mt-1 font-medium">{from.name}</div>
              <div className="text-slate-600">{from.email}</div>
              <div className="text-slate-600">{from.address}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">
                Bill to
              </div>
              <div className="mt-1 font-medium">{to.name}</div>
              <div className="text-slate-600">{to.email}</div>
              <div className="text-slate-600">{to.address}</div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-xs">
              <thead className="bg-slate-100 text-left uppercase tracking-widest text-[10px] text-slate-500">
                <tr>
                  <th className="p-3">Description</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Unit</th>
                  <th className="p-3 text-right">Total</th>
                  <th className="p-3 print:hidden" />
                </tr>
              </thead>
              <tbody>
                {items.map((it) => (
                  <tr key={it.id} className="border-t border-slate-100">
                    <td className="p-2">
                      <input
                        value={it.description}
                        onChange={(e) =>
                          updateItem(it.id, { description: e.target.value })
                        }
                        className="w-full bg-transparent px-2 py-1 focus:outline-none"
                        placeholder="Line item description"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        min="0"
                        value={it.qty}
                        onChange={(e) =>
                          updateItem(it.id, {
                            qty: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="w-16 bg-transparent px-2 py-1 focus:outline-none"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        min="0"
                        value={it.unit}
                        onChange={(e) =>
                          updateItem(it.id, {
                            unit: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="w-24 bg-transparent px-2 py-1 focus:outline-none"
                      />
                    </td>
                    <td className="p-2 text-right font-medium">
                      {formatCurrency(it.qty * it.unit, meta.currency)}
                    </td>
                    <td className="p-2 text-right print:hidden">
                      <button
                        aria-label="Remove line"
                        onClick={() => removeItem(it.id)}
                        className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-red-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 flex justify-between print:hidden">
            <button
              onClick={addItem}
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1 text-xs font-medium hover:border-slate-500"
            >
              <Plus className="h-3 w-3" /> Add line
            </button>
          </div>

          <div className="mt-8 ml-auto max-w-xs text-xs">
            <div className="flex justify-between border-t border-slate-100 py-2">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium">
                {formatCurrency(subtotal, meta.currency)}
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-100 py-2">
              <span className="text-slate-500">Tax ({meta.tax}%)</span>
              <span className="font-medium">
                {formatCurrency(taxAmount, meta.currency)}
              </span>
            </div>
            <div className="flex justify-between border-t-2 border-slate-900 py-3 text-base">
              <span className="font-semibold">Total</span>
              <span className="font-bold">
                {formatCurrency(total, meta.currency)}
              </span>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-4 text-[10px] text-slate-400">
            Generated with GetNextSite Agency — nextsite-agency.com
          </div>
        </div>
      </section>
    </div>
  );
}
