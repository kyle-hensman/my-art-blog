"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * Root Dialog component that wraps Radix UI's Dialog.Root and applies a data-slot attribute.
 *
 * @returns A Dialog.Root element with the provided props and a `data-slot="dialog"` attribute.
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * Renders a Dialog trigger element with a consistent data-slot attribute.
 *
 * @returns The Dialog trigger element with `data-slot="dialog-trigger"` and all provided props forwarded to the underlying Radix Trigger.
 */
function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * Renders a Radix Portal for dialog content and adds a data-slot attribute for styling hooks.
 *
 * @param props - Props forwarded to Radix's DialogPrimitive.Portal
 * @returns The rendered DialogPrimitive.Portal element
 */
function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * Renders a DialogPrimitive.Close wrapper that attaches the `data-slot="dialog-close"` attribute and forwards all props.
 *
 * @returns A DialogPrimitive.Close element with the provided props and `data-slot="dialog-close"`.
 */
function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

/**
 * Renders a backdrop overlay for the dialog with consistent positioning, backdrop, and animation styles.
 *
 * @returns A React element representing the dialog overlay with default fixed inset positioning, semi-transparent backdrop, animation classes, and a `data-slot="dialog-overlay"` attribute.
 */
function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders dialog content inside a portal with an overlay and optional close button.
 *
 * The component produces a styled DialogPrimitive.Content wrapped in a DialogPortal and a DialogOverlay,
 * and includes data-slot attributes for "dialog-portal", "dialog-overlay", and "dialog-content".
 *
 * @param className - Additional class names to merge with the component's default styling.
 * @param children - Content to render inside the dialog.
 * @param showCloseButton - If `true`, renders a built-in close button in the top-right corner; defaults to `true`.
 * @returns The composed dialog content element ready to be used within a Dialog root.
 */
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

/**
 * Renders a dialog header container with consistent layout and a `data-slot="dialog-header"` attribute.
 *
 * @param className - Additional class names to merge with the component's default header styles
 * @returns A `div` element used as the dialog header
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

/**
 * Renders the dialog footer that lays out children and an optional Close button.
 *
 * @param className - Additional CSS classes merged with the footer's default layout.
 * @param showCloseButton - If `true`, includes a Close button (styled outline) wired to the dialog Close primitive.
 * @param children - Content rendered inside the footer; children are rendered before the optional Close button.
 * @returns A div element serving as the dialog footer with data-slot="dialog-footer".
 */
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

/**
 * Renders a dialog title element with default typography and a data-slot for styling hooks.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns The rendered dialog title element
 */
function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the dialog description element with default styling and a data-slot attribute for styling hooks.
 *
 * @param className - Additional class names to merge with the default description styles
 * @returns The rendered description element with merged classes and `data-slot="dialog-description"`
 */
function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
